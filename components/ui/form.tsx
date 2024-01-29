"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Form = ({
  transformUrl2Code,
}: {
  transformUrl2Code: (url: string) => void;
}) => {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(evt) => {
        evt.preventDefault();
        const form = evt.currentTarget as HTMLFormElement;
        const url = form.elements.namedItem("url") as HTMLInputElement;
        transformUrl2Code(url.value);
      }}
    >
      <Label htmlFor="url"> Introduce tu URL de la imagen </Label>
      <Input
        name="url"
        id="url"
        type="text"
        placeholder="https://miimagen.com"
      />
      <Button> Convertir </Button>
    </form>
  );
};

export default Form;
