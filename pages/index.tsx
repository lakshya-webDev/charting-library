import Link from "next/link";

export default function Home() {
    const style={
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column',
       height:'100vh'
    }
  return (
    <div className="" style={style}>
      <h1 className="font-normal">Next PDX build</h1>
      <Link href="/charts">Go to Charts Page</Link>
    </div>
  );
}
