export function Header() {
  return (
    <header className="flex min-h-[40svh] flex-col items-center justify-center space-y-2 bg-[url(/images/header.jpg)] bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-white lg:text-4xl">
        E-Commerce Sample Website - Products page
      </h1>
      <p className="font-medium text-muted-foreground lg:text-lg">
        Take a look at our products.
      </p>
    </header>
  )
}
