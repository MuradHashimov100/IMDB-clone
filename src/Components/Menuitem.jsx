import Link from "next/link";

export const Menuitem = ({title,address,Icon}) => {
  return (
    <div>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-red-700 ">
            <Icon className="text-3xl sm:hidden mx-4"/>
            <p className="hidden sm:inline my-2 text-sm">{title}</p>
        </Link>
    </div>
  )
}
