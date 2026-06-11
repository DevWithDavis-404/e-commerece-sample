"use client"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { ViewProductDialog } from "./_components/view-product-dialog"
import { useState } from "react"

export type Category = {
  value: string
  label: string
}

export type Product = {
  category: "Shirts" | "Pants" | "Shoes" | "Watches"
  items: ProductItem[]
}

export type ProductItem = {
  name: string
  description: string
  size: string
  condition: string
  price: number
  image: string
}

export default function HomePage() {
  const [selectedProductItem, setSelectedProductItem] = useState<
    ProductItem | undefined
  >(undefined)
  const [openViewProductDialog, setOpenViewProductDialog] =
    useState<boolean>(false)

  const categories: Category[] = [
    {
      value: "shirts",
      label: "Shirts",
    },
    {
      value: "pants",
      label: "Pants",
    },
    {
      value: "shoes",
      label: "Shoes",
    },
  ]

  const products: Product[] = [
    {
      category: "Shirts",
      items: [
        {
          name: "2021 Balenciaga Black 'Silk Monogram Interior' Black Button Up Shirt",
          description:
            "For sale is a 2021 Balenciaga Black 'Silk Monogram Interior' Black Button Up Shirt",
          size: "Suitable for men's large",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1000,
          image: "/images/shirts/shirt1.jpg",
        },
        {
          name: "Vintage Helmut Lang True Washed Blue Denim Trucker Jacket",
          description:
            "For sale is a Vintage Helmut Lang True Washed Blue Denim Trucker Jacket",
          size: "50 (Medium)",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1500,
          image: "/images/shirts/shirt2.jpg",
        },
        {
          name: "AW2017 Balmain 'Snake & Panther' Entangled Graphic Black Sweatshirt",
          description:
            "For sale is an AW2017 Balmain 'Snake & Panther' Entangled Graphic Black Sweatshirt ",
          size: "Large",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1200,
          image: "/images/shirts/shirt3.jpg",
        },
        {
          name: "SS2025 Rick Owens 'Hollywood' Black 'Level' T-Shirt",
          description:
            "For sale is an SS2025 Rick Owens 'Hollywood' Black 'Level' T-Shirt",
          size: "Medium (size tag removed by previous owner) ",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1350,
          image: "/images/shirts/shirt4.jpg",
        },
        {
          name: "Rick Owens DRKSHDW Striped Black Short Sleeve Sweatshirt",
          description:
            "For sale is an Rick Owens DRKSHDW Striped Black Short Sleeve Sweatshirt",
          size: "Medium",
          condition: "8/10 good overall condition with light general wear",
          price: 1100,
          image: "/images/shirts/shirt5.jpg",
        },
        {
          name: "2000 Vintage Gucci by Tom Ford Striped Logo Brown Cotton Polo",
          description:
            "For sale is an 2000 Vintage Gucci by Tom Ford Striped Logo Brown Cotton Polo",
          size: "XL",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1050,
          image: "/images/shirts/shirt6.jpg",
        },
        {
          name: "Acne Studios Yellow Organic Cotton T-Shirt",
          description:
            "For sale is a Acne Studios Yellow Organic Cotton T-Shirt",
          size: "XL",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1450,
          image: "/images/shirts/shirt7.jpg",
        },
        {
          name: "Versace Spell-Out Monogram Grey Button Up Shirt",
          description:
            "For sale is a Versace Spell-Out Monogram Grey Button Up Shirt ",
          size: "IT44 (Small)",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1230,
          image: "/images/shirts/shirt8.jpg",
        },
      ],
    },
    {
      category: "Pants",
      items: [
        {
          name: "SS2024 Balenciaga 'Tattoo' Baggy Wide Cut Distressed Sweat Pants",
          description:
            "For sale is a pair of SS2024 Balenciaga 'Tattoo' Baggy Wide Cut Distressed Sweat Pants",
          size: "XXS",
          condition: "8.5/10 good overall condition with light general wear",
          price: 1000,
          image: "/images/pants/pants-1.jpg",
        },
        {
          name: "SS2008 Dior Homme 'Radioactivity' Unaltered Silver Waxed Skinny Jeans",
          description:
            "For sale is a pair of SS2008 Dior Homme 'Radioactivity' Unaltered Silver Waxed Skinny Jeans",
          size: "30",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1500,
          image: "/images/pants/pants-2.jpg",
        },
        {
          name: "Dries Van Noten ‘Marching Band’ Striped Navy/Blue Slim Cut Trousers",
          description:
            "For sale is a pair of Dries Van Noten ‘Marching Band’ Striped Navy/Blue Slim Cut Trousers",
          size: "IT46 (Small)",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1200,
          image: "/images/pants/pants-3.webp",
        },
        {
          name: "AW2017 Rick Owens ‘Glitter’ Viscontis Coated Plum Wide Leg Denim",
          description:
            "For sale is a pair of AW2017 Rick Owens ‘Glitter’ Viscontis Coated Plum Wide Leg Denim",
          size: "IT48 (Medium)",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1350,
          image: "/images/pants/pants-4.webp",
        },
        {
          name: "SS2024 Rick Owens Mainline ‘Lido’ DRKDust Stefan Cargo Pants",
          description:
            "For sale is a pair of SS2024 Rick Owens ‘Lido’ Stefan Cargo Pants",
          size: "32",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1100,
          image: "/images/pants/pants-5.jpg",
        },
        {
          name: "Rick Owens Stone Grey ‘CargoBela’ Wide Leg Pants",
          description:
            "For sale is a pair of Rick Owens Stone Grey ‘CargoBela’ Wide Leg Pants ",
          size: "XL",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1050,
          image: "/images/pants/pants-6.jpg",
        },
        {
          name: "Kris Van Assche Black Pinstripe Skinny Fit Cargo Trousers",
          description:
            "For sale is a pair of Kris Van Assche Black Pinstripe Skinny Fit Cargo Trousers ",
          size: "44 (men’s Small) ",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1450,
          image: "/images/pants/pants-7.webp",
        },
        {
          name: "Acne Studios ‘Pommy’ Tailored Organic Cotton Wide Leg Pants",
          description:
            "For sale is a pair of Acne Studios ‘Pommy’ Tailored Organic Cotton Wide Leg Pants ",
          size: "50",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1230,
          image: "/images/pants/pants-8.webp",
        },
      ],
    },
    {
      category: "Shoes",
      items: [
        {
          name: "AW2025 Oakley x Piet ‘Hoof’ Black/White Sneakers",
          description:
            "For sale is a pair of AW2025 Oakley x Piet ‘Hoof’ Black/White Sneakers ",
          size: "US 12",
          condition: "10/10 brand new with tags pristine overall condition with no flaws whatsoever. ",
          price: 1000,
          image: "/images/shoes/shoes1.webp",
        },
        {
          name: "1017 Alyx 9SM x Nike Air Force 1 High Black/White Buckle Sneakers",
          description:
            "For sale is a pair of 1017 Alyx 9SM x Nike Air Force 1 High Black/White Buckle Sneakers",
          size: "US 12",
          condition: "8/10 good overall condition with light general wear",
          price: 1500,
          image: "/images/shoes/shoes-2.webp",
        },
        {
          name: "No Faith Studios x Puma ‘Talon’ Flat Medium Grey Low Top Sneakers",
          description:
            "For sale is a pair of No Faith Studios x Puma ‘Talon’ Flat Medium Grey Low Top Sneakers",
          size: "US 12",
          condition: "10/10 brand new with tags pristine overall condition with no flaws whatsoever.",
          price: 1200,
          image: "/images/shoes/shoes3.webp",
        },
        {
          name: "AW2022 Walter Van Beirendonck ‘Hyper Glam’ Teeth Platform Black Leather Boots",
          description:
            "For sale is a AW2022 Walter Van Beirendonck ‘Hyper Glam’ Teeth Platform Black Leather Boots",
          size: "US 9 (42) ",
          condition: "8/10 good overall condition with minimal wear.",
          price: 1350,
          image: "/images/shoes/shoes-4.webp",
        },
        {
          name: "Rick Owens ‘Ramones’ Studded Eyelet Black Canvas High Top Sneakers",
          description:
            "For sale is a pair of Rick Owens ‘Ramones’ Studded Eyelet Black Canvas High Top Sneakers",
          size: "IT44.5 (US 11.5)",
          condition: "8/10 good overall condition with light general wear",
          price: 1100,
          image: "/images/shoes/shoes-5.webp",
        },
        {
          name: "Rick Owens Stone Grey ‘CargoBela’ Wide Leg Pants",
          description:
            "For sale is a pair of Rick Owens Stone Grey ‘CargoBela’ Wide Leg Pants ",
          size: "XL",
          condition: "9/10 pristine overall condition with no flaws whatsoever",
          price: 1050,
          image: "/images/shoes/shoes-6.webp",
        },
        {
          name: "SS2003 Comme Des Garçons Homme Plus ‘Cuba’ Era Low Top Sneakers",
          description:
            "For sale is a pair of SS2003 Comme Des Garçons Homme Plus ‘Cuba’ Era Low Top Sneakers ",
          size: "JP 25.5 (US 7.5) ",
          condition: "7/10 good overall condition with some general wear throughout.",
          price: 1450,
          image: "/images/shoes/shoes-7.webp",
        },
        {
          name: "JJJJound x Timberland Black Patent Leather Boots",
          description:
            "For sale is a pair of JJJJound x Timberland Black Patent Leather Boots ",
          size: "US 8.5 (42)",
          condition: "general wear throughout, some scuffing on the toebox most prominently.",
          price: 1230,
          image: "/images/shoes/shoes-8.webp",
        },
      ],
    },
  ]

  return (
    <>
      <div className="p-4 lg:mx-auto lg:max-w-5xl">
        <Tabs className={"space-y-2"}>
          <TabsList variant={"line"} className={"w-full"}>
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {products.map((product) => (
            <TabsContent
              key={product.category}
              value={product.category.toLowerCase()}
            >
              <ItemGroup className="grid grid-cols-2 md:grid-cols-4">
                {product.items.map((item) => (
                  <Item
                    key={item.name}
                    className="group hover:cursor-pointer hover:underline"
                    onClick={() => {
                      setOpenViewProductDialog(true)
                      setSelectedProductItem(item)
                    }}
                  >
                    <ItemHeader>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={400}
                        className="aspect-square object-cover"
                      />
                    </ItemHeader>
                    <ItemContent>
                      <ItemTitle>{item.name}</ItemTitle>
                      <ItemDescription>
                        PHP {item.price.toLocaleString()}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {selectedProductItem && (
        <ViewProductDialog
          open={openViewProductDialog}
          setOpen={setOpenViewProductDialog}
          item={selectedProductItem}
        />
      )}
    </>
  )
}
