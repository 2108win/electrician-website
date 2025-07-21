"use client";

import FormAppointment from "@/components/forms/form-appointment";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import { useState } from "react";

function DialogAppointment({
  buttonText = "Appointment",
  className,
  iconClassName,
  childClassName,
}: {
  buttonText?: string;
  className?: string;
  iconClassName?: string;
  childClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  //   clear form state on close
  const handleClose = () => {
    setResetForm(true);
  };

  // Form initialization

  // Form submission handler

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="xl"
          className={cn(
            "hover:bg-background hover:text-primary hover:border-primary border-1 border-transparent",
            className,
          )}
        >
          <Zap className={iconClassName} size={16} />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent
        onPointerDownOutside={handleClose}
        onEscapeKeyDown={handleClose}
        className={cn("max-w-2xl", childClassName)}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Schedule Your Service
          </DialogTitle>
        </DialogHeader>
        {/* Form Appointment */}
        <FormAppointment onSuccess={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export default DialogAppointment;
