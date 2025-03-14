import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className={`${styles.menucontainer} flex justify-end items-center space-x-4 p-4 bg-gray-100`}>
            <TopMenuItem title="Booking" pageRef="/booking" />
            <Image src="/img/logo.png" alt="logo" width={40} height={40} className="w-auto h-10" />
        </div>
    );
}
