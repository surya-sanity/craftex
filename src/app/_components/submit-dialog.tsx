"use-client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

interface SubmitDialogFormType {
  url: string;
  name: string;
  description?: string;
}

const SubmitDialog = () => {
  // states
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // form control
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isDirty },
  } = useForm<SubmitDialogFormType>();

  useEffect(() => {
    if (!isDialogOpen) {
      reset();
    }
  }, [isDialogOpen]);

  const submitHandler = async (values: SubmitDialogFormType) => {
    const valid = await trigger();

    if (valid && values) {
      console.log("values", values);
      // TODO, implement creation of post with awaiting approval from admin.
    }
  };

  const handleTriggerclick = () => setIsDialogOpen((prev) => !prev);

  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <Dialog onOpenChange={setIsDialogOpen} open={isDialogOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} onClick={handleTriggerclick}>
          Submit portfolio
        </Button>
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          if (isDirty) {
            e.preventDefault();
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>Portfolio details</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-5 pt-2"
        >
          <div className="flex w-full flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label>Name*</Label>
              <div className="text-sm text-muted-foreground">
                Displayed as title of your porfolio.
              </div>
            </div>
            <Input {...register("name", { required: true })} />
            {errors.name ? (
              <div className="text-xs text-red-500">Required</div>
            ) : null}
          </div>

          <div className="flex w-full flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label>URL*</Label>
              <div className="text-sm text-muted-foreground">
                Url of the portfolio site.
              </div>
            </div>
            <Input {...register("url", { required: true })} />
            {errors.url ? (
              <div className="text-xs text-red-500">Required</div>
            ) : null}
          </div>

          <div className="flex w-full flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label>Description</Label>
              <div className="text-sm text-muted-foreground">
                A short description of the portfolio (Example: Tech stack
                used..)
              </div>
            </div>
            <Textarea
              {...register("description", { required: false })}
              className="max-h-[10rem]"
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-3">
            <Button size={"sm"} variant={"outline"} onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button size={"sm"} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitDialog;
