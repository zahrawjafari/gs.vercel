import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Code,
  Undo2,
  Redo2,
  RemoveFormatting,
  ChevronDown,
} from "lucide-react";
function TextEditor() {
  const [headingOpen, setHeadingOpen] = useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "min-h-[250px] p-4 outline-none text-gray-800 dark:text-white leading-7",
      },
    },
  });
  if (!editor) {
    return null;
  }
  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previousUrl || "https://");
    if (url === null) {
      return;
    }
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };
  const headings = [
    {
      label: "Heading 1",
      level: 1 as const,
    },
    {
      label: "Heading 2",
      level: 2 as const,
    },
    {
      label: "Heading 3",
      level: 3 as const,
    },
  ];
  return (
    <div className="relative mt-2 h-74 max-w-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-[#1E293B]">
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-300 dark:border-slate-700 p-1">
        <div className="relative">
          <button
            type="button"
            onClick={() => setHeadingOpen(!headingOpen)}
            className="flex h-8 items-center gap-1 rounded px-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
            {editor.isActive("heading", { level: 1 })
              ? "Heading 1"
              : editor.isActive("heading", { level: 2 })
                ? "Heading 2"
                : editor.isActive("heading", { level: 3 })
                  ? "Heading 3"
                  : "Normal"}
            <ChevronDown size={14} />
          </button>
          {headingOpen && (
            <div className="absolute left-0 top-9 z-50 w-36 rounded border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] py-1 shadow-lg">
              {headings.map((item) => (
                <button
                  key={item.level}
                  type="button"
                  onClick={() => {
                    editor
                      .chain()
                      .focus()
                      .toggleHeading({
                        level: item.level,
                      })
                      .run();
                    setHeadingOpen(false);
                  }}
                  className="block w-full px-3 py-2 text-left text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  editor.chain().focus().setParagraph().run();
                  setHeadingOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                Normal
              </button>
            </div>
          )}
        </div>
        <div className="mx-1 h-6 w-px bg-gray-300 dark:bg-slate-700" />
        <button
          type="button"
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <Bold size={17} />
        </button>
        <button
          type="button"
          title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <Italic size={17} />
        </button>
        <button
          type="button"
          title="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <UnderlineIcon size={17} />
        </button>
        <button
          type="button"
          title="Strike"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <Strikethrough size={17} />
        </button>
        <button
          type="button"
          title="Link"
          onClick={setLink}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700" >
          <LinkIcon size={17} />
        </button>
        <div className="mx-1 h-6 w-px bg-gray-300 dark:bg-slate-700" />
        <button
          type="button"
          title="Bullet List"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <List size={18} />
        </button>
        <button
          type="button"
          title="Ordered List"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <ListOrdered size={18} />
        </button>
        <button
          type="button"
          title="Quote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <Quote size={17} />
        </button>
        <button
          type="button"
          title="Code"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <Code size={17} />
        </button>
        <div className="mx-1 h-6 w-px bg-gray-300 dark:bg-slate-700" />
        <button
          type="button"
          title="Undo"
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30">
          <Undo2 size={17} />
        </button>
        <button
          type="button"
          title="Redo"
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30">
          <Redo2 size={17} />
        </button>
        <button
          type="button"
          title="Clear Formatting"
          onClick={() =>
            editor.chain().focus().clearNodes().unsetAllMarks().run()
          }
          className="rounded p-1.5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700">
          <RemoveFormatting size={17} />
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="text-gray-700 dark:text-white"
      />
    </div>
  );
}
export default TextEditor;
