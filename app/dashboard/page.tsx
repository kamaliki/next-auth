import Link from "next/link";

export default function Dashboard() {
    return(
        <div>
            <h1>Dashboard</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link href="/dashboard/analysis"> Analysis </Link>
        </div>

    )
}