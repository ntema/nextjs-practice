import style from "../../styles/Employees.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data =await res.json();

    return {
        props:{employees : data}
    }
}

const Employees = ({employees})=>{
    return (
        <div>
            <h1>All Employees</h1>
            {employees.map(employee=>(
                <Link href= {"/employees/"+ employee.id} key={employee.id} className={style.single}>
                    <h3>
                        {employee.name}
                    </h3>
                </Link>
            ))}
        </div>
    );
}

export default Employees