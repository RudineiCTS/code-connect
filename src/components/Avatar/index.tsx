import Image from "next/image"

interface AvatarDto {
    name:string,
    imageSrc: string,
 
}

export const Avatar = ({name, imageSrc}: AvatarDto) => {
    return <ul>
        <li>
            <Image src={imageSrc} width={32} height={32} alt="image to user"/>
        </li>
        <li>
            @{name}
        </li>
    </ul>
}