import { Button, message } from "antd";
import ClipboardJS from "clipboard";
import React, { useEffect, useRef } from "react";

export default function CopyClipBoard({ copyText }) {
  // Tạo tham chiếu đến button
  const buttonRef = useRef(null);

  useEffect(() => {
    // Khởi tại ClipboardJS khi component được mount
    const clipborad = new ClipboardJS(buttonRef.current);

    // Lắng nghe sự kiện copy thành công
    clipborad.on("success", () => {
      message.success("Copy đường dẫn thành công");
    });

    // Hủy sự kiện khi component bị unmount
    return () => {
      clipborad.destroy();
    };
  }, []);

  return (
    <div>
      <Button data-clipboard-text={copyText} ref={buttonRef}>
        Copy
      </Button>
    </div>
  );
}
