import {useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config.js'
import { useNavigate, useParams } from 'react-router-dom'
import { Spinner } from '../components/index.js';

function EditPost() {

    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPosts(post)
                }
            })
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8 px-8'>
        <Container className='bg-[#C9C9B0] rounded-xl m-4 py-8 px-8 text-lg'>
            <PostForm post={post} />
        </Container>
    </div>
  ) : <Spinner />
}

export default EditPost
