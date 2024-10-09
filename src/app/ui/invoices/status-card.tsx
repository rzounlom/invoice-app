import { FC } from "react";
import clsx from "clsx";
import { titleCase } from "@/lib/utils/title-case";

interface StatusCardProps {
  status: string;
}

const StatusCard: FC<StatusCardProps> = ({ status }) => {
  return (
    <div
      className={clsx(
        "w-[104px] h-[40px] flex justify-center items-center rounded-[6px] font-bold text-[15px] leading-[15px] tracking-[-.25px]",
        {
          "bg-emerald-green/5 text-emerald-green/100": status === "paid",
          "bg-sunset-orange/5 text-sunset-orange/100": status === "pending",
          "bg-pale-navy/5 text-pale-navy/100": status === "draft",
        }
      )}
    >
      <p
        className={clsx("opacity-100 h-[8px] w-[8px] rounded-full border", {
          "bg-emerald-green/100": status === "paid",
          "bg-sunset-orange/100": status === "pending",
          "bg-pale-navy/100": status === "draft",
        })}
      ></p>
      <p className={clsx("ml-[8px]")}>{titleCase(status)}</p>
    </div>
  );
};

export default StatusCard;
