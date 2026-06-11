"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ProductItem } from "../page"
import Image from "next/image"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function ViewProductDialog({
  open,
  setOpen,
  item,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  item: ProductItem
}) {
  const [quantity, setQuantity] = useState<number>(0)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className={"min-h-[40svh] md:min-w-2xl lg:min-w-4xl"}>
        <div className="flex flex-col gap-4 md:flex-row">
          <Image
            src={item.image}
            alt={item.name}
            height={400}
            width={300}
            className="aspect-square object-cover"
          />
          <div className="grid gap-2">
            <h3 className="text-xl lg:max-w-2xl lg:text-2xl">{item.name}</h3>
            <p className="lg:max-w-lg lg:text-base">
              {item.description}
            </p>
            <ul>
              <li className="text-base text-muted-foreground">
                Size:
                <span className="ml-2 text-black">{item.size}</span>
              </li>
              <li className="text-base text-muted-foreground">
                Condition:
                <span className="ml-2 text-black">{item.condition}</span>
              </li>
            </ul>
            <p className="font-mono text-lg">
              PHP
              <span className="ml-1 font-medium">{item.price}</span>
            </p>
            <div className="grid gap-1">
              <Label className="text-base text-muted-foreground">
                Quantity
              </Label>
              <InputGroup className="max-w-28">
                <InputGroupAddon>
                  <InputGroupButton
                    variant={"outline"}
                    onClick={() => setQuantity((value) => value - 1)}
                  >
                    <Minus />
                  </InputGroupButton>
                </InputGroupAddon>
                <InputGroupInput
                  type="text"
                  value={quantity}
                  onChange={() => setQuantity}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="text-center"
                />
                <InputGroupAddon align={"inline-end"}>
                  <InputGroupButton
                    variant={"outline"}
                    onClick={() => setQuantity((value) => value + 1)}
                  >
                    <Plus />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <Button
              size={"lg"}
              className={"w-full lg:max-w-36"}
              onClick={() => {
                toast.success("Item added to cart successfully!")
                setOpen(false)
              }}
            >
              <ShoppingCart />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
