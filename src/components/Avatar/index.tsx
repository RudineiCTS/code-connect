import Image from "next/image"
import styles from './avatar.module.css'
interface AvatarDto {
    name:string,
    imageSrc: string,
 
}

export const Avatar = ({name, imageSrc}: AvatarDto) => {
    return <ul className={styles.container}>
        <li className={styles.icon}>
            <Image src={imageSrc} width={32} height={32} alt="image to user"/>
        </li>
        <li className={styles.username}>
            @{name}
        </li>
    </ul>
}