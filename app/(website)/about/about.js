import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Qui sommes-nous ?
      </h1>
      <div className="text-center">
        <p className="text-lg">
          Nous sommes une petite équipe passionnée de fitness
        </p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Depuis plusieurs années, nous sommes des passionnés de
          fitness et de bien-être, toujours à l'affût des nouvelles
          techniques de musculation, de minceur et d'amélioration de
          la santé. Nous passons un temps considérable à explorer les
          études et les conseils disponibles en ligne, cherchant à
          affiner nos connaissances et à perfectionner nos routines.
        </p>
        <p>
          C'est pourquoi nous avons décidé de créer un blog qui
          regroupe les meilleurs articles, conseils et études que nous
          découvrons. Notre objectif est de rendre ces informations
          accessibles dans des formats simples et concis, afin que
          chacun puisse en bénéficier et atteindre ses objectifs de
          fitness et de bien-être de manière efficace.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
