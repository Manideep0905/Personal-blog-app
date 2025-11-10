import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8'>
        <Container className='bg-[#C9C9B0] rounded-xl m-4 py-8 px-8 text-lg'>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
