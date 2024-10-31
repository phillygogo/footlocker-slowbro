import Image from 'next/image';
import Nav from '../ui/components/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      <div className="flex bg-white items-center justify-center h-20 w-full">
        <div className="flex w-full max-w-screen-xl">
          <Image
            src="/logo.svg"
            width={0}
            height={0}
            style={{ width: '192px', height: '29px' }} // optional
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
      <Nav />
      <div className="flex justify-center w-full max-w-screen-xl bg-white min-h-screen size-full px-6">
        {children}
      </div>
    </div>
  );
}