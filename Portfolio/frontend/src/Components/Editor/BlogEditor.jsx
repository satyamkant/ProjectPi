import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import ActionsPlugin from "./plugins/ActionsPlugin";
import "./css/BlogEditor.scss"
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {useEffect, useState} from "react";


import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import parseEditorStateToHtml from "./parseEditorStateToHtml";

function OnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        return editor.registerUpdateListener(({editorState}) => {
            onChange(editorState,editor);
        });
    }, [editor, onChange]);
    return null;
}


export default function BlogEditor() {
    const [editorState, setEditorState] = useState(null);
    const [html, setHtml] = useState("");
    const [editor] = useLexicalComposerContext();
    const [blogTitle, setBlogTitle] = useState("");


    useEffect(() => {
        const loadEditorData = async () => {
            try {
                const editorDataModule = await import('../../DAO/editorData.json');
                const editorData = editorDataModule.default;

                editor.update(() => {
                    const parsedState = editor.parseEditorState(editorData);
                    editor.setEditorState(parsedState);
                });

            } catch (error) {
                console.error("Error loading editor data:", error);
            }
        };

        loadEditorData();
    }, []); // Run once on mount


    function onChange(current, editor) {
        const editorStateJSON = current.toJSON();
        setEditorState(JSON.stringify(editorStateJSON));
        parseEditorStateToHtml(editorStateJSON).then(r => setHtml(r));
    }

    function onChnageTitle(event){
        setBlogTitle(event.target.value);
    }


    function onClick(){
        const payload = {
            title: blogTitle,
            editorState: editorState,
        };
        console.log(payload);
    }


    return (
        <div className="blog-editor row my-3 mx-3">
            <div className="col-md-6">
                <div className="card">
                    <h5 className="card-header">Editor</h5>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Blog Title</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="Enter Blog Title" onChange={onChnageTitle}/>
                        </div>
                        <div className="my-editor editor-container">
                            <ToolbarPlugin/>
                            <div className="editor-inner">
                                <RichTextPlugin
                                    contentEditable={<ContentEditable className="editor-input"/>}
                                    placeholder={<div className="editor-placeholder">
                                        Play around with the Markdown plugin...
                                    </div>}
                                    ErrorBoundary={LexicalErrorBoundary}/>
                                <AutoFocusPlugin/>
                                <ListPlugin/>
                                <LinkPlugin/>
                                <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
                                <CodeHighlightPlugin/>
                                <OnChangePlugin onChange={onChange}/>
                                <HistoryPlugin/>
                            </div>
                            <ActionsPlugin/>
                        </div>

                        <button type="button" className="btn btn-success my-2" onClick={onClick}>Submit</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <h5 className="card-header">Preview</h5>
                    <div className="card-body">
                        <div className="my-editor editor-container">
                            <h1 id="blog-title" className="card-title">{blogTitle}</h1>
                            <div dangerouslySetInnerHTML={{__html: html}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
