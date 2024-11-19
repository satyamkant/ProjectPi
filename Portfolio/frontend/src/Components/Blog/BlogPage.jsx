import "./css/BlogPage.css"

import ExampleTheme from "../Editor/ExampleTheme";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import {ListItemNode, ListNode} from "@lexical/list";
import {CodeHighlightNode, CodeNode} from "@lexical/code";
import {TableCellNode, TableNode, TableRowNode} from "@lexical/table";
import {AutoLinkNode, LinkNode} from "@lexical/link";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import BlogEditor from "../Editor/BlogEditor";



function BlogPage() {

    const editorConfig = {
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
    };

    return (
       <div className="blog-page">
           <LexicalComposer initialConfig={editorConfig}>
                <BlogEditor/>
           </LexicalComposer>
       </div>
   )
}

export default BlogPage;