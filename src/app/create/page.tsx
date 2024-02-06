"use client"

import {useRouter} from 'next/navigation';

export default function Create() {
    const router = useRouter()
    return (
        <>
            <form onSubmit={(e: any) => {
                e.preventDefault()
                const title = e.target.title.value
                const body = e.target.body.value
                const options = {
                    method: 'POST',
                    header: {
                        'Content-Type': 'application/app'
                    },
                    body: JSON.stringify({title, body})
                }
                fetch('http://localhost:9999/topics', options)
                    .then(resp => resp.json())
                    .then(result => {
                        console.log(result, '<====result')
                        const lastId = result.id
                        router.push(`/read/${lastId}`)
                        router.refresh()
                    })
            }
            }>
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="create"/></p>
            </form>
        </>
    );
}
