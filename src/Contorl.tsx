"use client"
import Link from 'next/link';
import {useParams, useRouter} from 'next/navigation';
import localFont from 'next/dist/compiled/@next/font/dist/local';

export default function Contorl() {
    const params = useParams()
    const router = useRouter()
    const id = params.id
    return (
        <ul>
            <li><Link href="/create">Create</Link></li>
            {
                id ? <>
                    <li><Link href={`/update/${id}`}>Update</Link></li>
                    <li><input type="button" value="delete" onClick={() => {
                        const options = {method: 'DELETE'}
                        fetch('http://localhost:9999/topics/' + id, options)
                            .then(resp => resp.json())
                            .then(result => {
                                router.push('/')
                                router.refresh()
                                console.log(result)
                            })
                    }}/></li>
                </> : null
            }
        </ul>
    )
}
