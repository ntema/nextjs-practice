import Link from "next/link"
import Image  from "next/image"

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <h1>Phreetech Employees</h1>
                {/* <img src="/favicon.ico"/> */}
                {/* <Image src = "/logo_white2.png" width="30" height="30"></Image> */}
            </div>
           <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/employees">Employee Listing</Link>
        </nav>
    );
}

export default  Navbar