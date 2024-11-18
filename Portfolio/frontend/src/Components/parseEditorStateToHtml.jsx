import { $generateHtmlFromNodes } from "@lexical/html";
import { createEditor } from "lexical";
import postProcessHtml from "./PostProcessHtml";
import ExampleTheme from "./themes/ExampleTheme";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import {ListItemNode, ListNode} from "@lexical/list";
import {CodeHighlightNode, CodeNode} from "@lexical/code";
import {TableCellNode, TableNode, TableRowNode} from "@lexical/table";
import {AutoLinkNode, LinkNode} from "@lexical/link";

async function parseEditorStateToHtml(jsonData) {
    // Create a new Lexical editor instance
    const editor = createEditor({
        theme: ExampleTheme,
        // Any custom nodes go here
        nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode
        ]
    });

    // Parse the JSON into an EditorState
    const editorState = editor.parseEditorState(jsonData);

    // Generate HTML
    let htmlString = "";
    editor.setEditorState(editorState);

    editor.update(() => {
        htmlString = $generateHtmlFromNodes(editor, null);
        htmlString = postProcessHtml(htmlString);
        // Convert nodes to HTML
    });

    return htmlString;
}

export default parseEditorStateToHtml;