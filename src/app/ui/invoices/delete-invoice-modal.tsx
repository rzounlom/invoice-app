"use client";

import * as actions from "@/actions";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useFormState, useFormStatus } from "react-dom";

import { FC } from "react";

interface DeleteInvoiceModalProps {
  open: boolean;
  onClose: () => void;
  invoiceId: string;
}

const DeleteInvoiceModal: FC<DeleteInvoiceModalProps> = ({
  open,
  onClose,
  invoiceId,
}) => {
  const handleClose = () => {
    onClose();
  };

  const [, action] = useFormState(actions.deleteInvoice.bind(null, invoiceId), {
    errors: {},
  });

  const { pending } = useFormStatus();

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white dark:bg-midnight-navy px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="w-full h-[220px] flex flex-col bg-white dark:bg-midnight-navy rounded-[8px] px-[32px] py-[34px]">
              <p className="text-jet-black dark:text-white text-[24px] font-bold leading-[32px] tracking-[-.5px]">
                Confirm Deletion
              </p>
              <p className="mt-[5px] text-[13px] font-medium text-cool-blue dark:text-pale-periwinkle leading-[22px] tracking-[-.1px]">
                Are you sure you want to delete invoice #
                {invoiceId.substring(0, 6).toUpperCase()}? This action cannot be
                undone.
              </p>
              <div className="w-full mt-[24px] flex justify-end items-end text-[15px] font-bold leading-[15px] tracking-[-.25px]">
                <button
                  onClick={handleClose}
                  className="bg-muted-white dark:bg-deep-charcoal text-cool-blue dark:text-pale-periwinkle rounded-[24px] h-[48px] w-[91px]"
                >
                  Cancel
                </button>
                <form action={action}>
                  <button
                    className="bg-coral-red text-white rounded-[24px] w-[89px] h-[48px] ml-[8px]"
                    type="submit"
                    disabled={pending}
                  >
                    {pending ? "Deleting..." : "Delete"}
                  </button>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteInvoiceModal;
