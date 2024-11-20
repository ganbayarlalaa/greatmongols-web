import { Navbar } from "flowbite-react";
const Navigation = () => {
  const navs = [
    { name: "Нүүр хуудас", anchor: "#home" },
    { name: "Бидний тухай", anchor: "#about" },
    { name: "Гишүүд", anchor: "#members" },
    { name: "Мэдээ мэдээлэл", anchor: "#posts" },
    { name: "Хаяг байршил", anchor: "#location" },
  ];
  return (
    <Navbar className="fixed z-50 w-full bg-white dark:bg-gray-800">
      <Navbar.Brand>
        <img
          src="https://drive.google.com/file/d/1uOZQz2jI9c6xWod41g2pnRrJd5RFwHco/view?usp=drive_link"
          className="mr-3 h-12 sm:h-14"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
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
