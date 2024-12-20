import { Navbar } from "flowbite-react";
const Navigation = () => {
  const navs = [
    { name: "Нүүр хуудас", anchor: "#home" },
    { name: "Бидний тухай", anchor: "#about" },
    { name: "Ерөнхийлөгч", anchor: "#presidents" },
    { name: "Нийтлэл", anchor: "#posts" },
    { name: "Хаяг байршил", anchor: "#location" },
  ];
  return (
    <Navbar className="fixed z-50 w-full bg-white dark:bg-gray-800">
      <Navbar.Brand href="#home">
        <img
          src="https://ganbayarlalaa.github.io/greatmongols-web/logo.png"
          className="mr-3 h-12 sm:h-14"
          alt="logo"
        />
        <span className="cursor-pointer self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          GREAT MONGOLS
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navs.map((nav) => (
          <Navbar.Link key={`${nav.name}-key`} href={nav.anchor}>
            {nav.name}
          </Navbar.Link>
        ))}{" "}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
