import { useState } from "react";
import Modal from "react-modal";
import { X } from "@phosphor-icons/react";

interface LargeCardProps {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  deadline: string;
  place: string;
  attachments: string[];
  stage: {
    title: string;
  };
}

export function LargeCard({
  title,
  description,
  priority,
  deadline,
  place,
  attachments,
  stage: { title: stageTtitle },
}: LargeCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen(_: React.MouseEvent) {
    setIsOpen(true);
  }

  function handleClose(_: React.MouseEvent) {
    setIsOpen(false);
  }

  const priorityStyle = {
    low: "low-priority",
    medium: "medium-priority",
    high: "high-priority",
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        <div className="w-full text-black grid grid-cols-3 gap-4">
          <header className="col-span-3 flex items-center justify-between">
            <h3 className="text-xl font-bold">{title}</h3>
            <button onClick={handleClose}>
              <X size={24} />
            </button>
          </header>

          <span className={priorityStyle[priority] + " justify-self-start"}>
            {priority}
          </span>
          <span>
            <span className="font-bold">Data:</span> {deadline}
          </span>
          <span>
            <span className="font-bold">Local:</span> {place}
          </span>

          <p>{description}</p>

          <hr className="col-span-3" />

          <span className="col-span-3 flex items-center gap-2 self-end">
            <span>Anexos:</span>
            <span className="underline underline-offset-2">{attachments.toString()}</span>
          </span>
        </div>
      </Modal>

      <div
        onClick={handleOpen}
        className="bg-slate-100 text-black w-full rounded p-2 flex flex-col gap-1 hover:bg-slate-200 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <h3>{title}</h3>
          <h4 className="bg-black text-white rounded px-1">{stageTtitle}</h4>
        </div>
        <hr />
        <div className="flex items-center gap-2">
          <span className={priorityStyle[priority]}>{priority}</span>
          <span className="text-xs">{deadline.toString()}</span>
        </div>
        <span>{place}</span>
        <p className="text-xs">{description}</p>
        <p className="text-sm underline">{attachments.toString()}</p>
      </div>
    </>
  );
}
