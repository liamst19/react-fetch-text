# React Fetch Text Demo

[Demo Page](https://liamst19.github.io/react-fetch-text/)

This is a demo for fetching text from a separate file, after the page has loaded, in React. The page fetches a long Japanese text, which is split by newline and rendered into separate paragraph elements.

There seems to be a problem when the paragraphs with vertical text-orientation are rendered into multiple column layout, where the height of the box containing the paragraphs becomes that of the very first column (row in the case of vertical text).

I've tried implementing a rather hack-y solution of adding an `window.onresize` event handler which sets the height of the container `div` to `scrollHeight`, which is the height of the element including any overflowing children. ([source](https://yuheiy.hatenablog.com/entry/2017/05/08/221206))
