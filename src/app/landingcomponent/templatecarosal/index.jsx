import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WEBSITES_TEMPLATES } from "@/boilercode/constants";
import Link from "next/link";
import Image from "next/image";

export default function CarouselSpacing() {
  return (
    <Carousel className="w-full space-y-6">
      <div className="text-center text-lg md:text-5xl font-semibold">Start with templates</div>
      <CarouselContent className="-ml-1">
        {WEBSITES_TEMPLATES.map((website, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Link href={"/with-template"}>
                    <div className="space-y-2">
                      <div className="border-2 rounded-lg">
                        {website.image.map((image) => (
                          <Image
                            loading="lazy"
                            key={image}
                            className="object-contain"
                            src={`https://templates.launchify.club${image}`}
                            alt={website.type}
                            width={400}
                            height={200}
                          />
                        ))}
                      </div>
                      <div>
                        <h3>{website.name}</h3>
                        <p>{website.description}</p>
                        <div>
                          <div className="flex flex-col">
                            <span>{website.type}</span>
                            <span className="text-black text-opacity-65 font-semibold text-sm">
                              {`Developed by: ${website.author}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
