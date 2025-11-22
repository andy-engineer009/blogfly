"use client";

import type { Editor } from "@ckeditor/ckeditor5-core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ],
};

type CustomEditorProps = {
  data: string;
  onChange: (data: string) => void;
  onBlur?: () => void;
};

export default function CustomEditor({ data, onChange, onBlur }: CustomEditorProps) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      config={editorConfiguration}
      onReady={(editor: Editor) => {
        editor.editing.view.change((writer: any) => {
          writer.setStyle("min-height", "120px", editor.editing.view.document.getRoot());
        });
      }}
      onChange={(_event: any, editor: Editor) => {
        const nextData = editor.getData();
        onChange(nextData);
      }}
      onBlur={() => {
        onBlur?.();
      }}
    />
  );
}

