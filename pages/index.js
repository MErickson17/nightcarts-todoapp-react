import {GoogleProvider} from 'components/auth/providers/google'
import firebase from "./../firebase"

export default function Home() {
  console.log(firebase)
  return (
    <div>
      <GoogleProvider/>
    </div>
  )
}

