import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOne } from '../../services/profileService'
import { update } from '../../services/profileService'

const UpdateProfile = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateProfile(form) : props.handleSignupOrLogin(form)
    navigate(`/profiles/${id}`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.profile.id,
        name: data.profile.name,
        dob: data.profile.dob,
        location: data.profile.location,
        genderIdentity: data.profile.gender_identity,
        orientation: data.profile.orientation,
        vibeCheck: data.profile.vibe_check,
        sunSign: data.profile.vibe_check,
        moonSign: data.profile.vibe_check,
        risingSign: data.profile.vibe_check,
        smoke: false,
        drink: false,
        fourTwenty: false,
        isSober: false,
        bio: data.profile.bio
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])


  return ( <>
    <h2>Update Your Profile!</h2>

    <section className='form-container'>
      <form onSubmit={handleSubmit}>
        Name:
        <input
        value={id.profile?.name}
        onChange={handleChange}
        id="name"
        required name="name"
        type="text"
        placeholder={id.profile?.name}
        autoComplete="off"
        />
        {/* <br />
        Birth Date:
        <input
        value={id.profile?.dob}
        onChange={handleChange}
        id="dob"
        required name="dob"
        type="text"
        placeholder=""
        autoComplete="off"
        /> */}
        <br />
        Location:
        <input
        value={id.profile?.location}
        onChange={handleChange}
        id="location"
        name="location"
        type="text"
        placeholder=""
        autoComplete="off"
        />
        <br />
        Gender Identity:
        <input
        value={id.profile?.gender_identity}
        onChange={handleChange}
        id="gender-identity"
        name="genderIdentity"
        type="text"
        placeholder=""
        autoComplete="off"
        />
        <br />
        Orientation:
        <input
        value={id.profile?.orientation}
        onChange={handleChange}
        id="orientation"
        name="orientation"
        type="text"
        placeholder=""
        autoComplete="off"
        />
        <br />
        Sun Sign:
        <select
        name="sunSign"
        onChange={handleChange}
        placeholder=""
        >
          <option value="Ari">Aries</option>
          <option value="Tau">Taurus</option>
          <option value="Gem">Gemini</option>
          <option value="Can">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Vir">Virgo</option>
          <option value="Lib">Libra</option>
          <option value="Sco">Scorpio</option>
          <option value="Sag">Sagittarius</option>
          <option value="Cap">Capricorn</option>
          <option value="Aqu">Aquarius</option>
          <option value="Pis">Pisces</option>
        </select>
        <br />
        Moon Sign:
        <select
        name="sunSign"
        onChange={handleChange}
        placeholder=""
        >
          <option value="Ari">Aries</option>
          <option value="Tau">Taurus</option>
          <option value="Gem">Gemini</option>
          <option value="Can">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Vir">Virgo</option>
          <option value="Lib">Libra</option>
          <option value="Sco">Scorpio</option>
          <option value="Sag">Sagittarius</option>
          <option value="Cap">Capricorn</option>
          <option value="Aqu">Aquarius</option>
          <option value="Pis">Pisces</option>
        </select>
        <br />
        Rising Sign:
        <select
        name="sunSign"
        onChange={handleChange}
        placeholder=""
        >
          <option value="Ari">Aries</option>
          <option value="Tau">Taurus</option>
          <option value="Gem">Gemini</option>
          <option value="Can">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Vir">Virgo</option>
          <option value="Lib">Libra</option>
          <option value="Sco">Scorpio</option>
          <option value="Sag">Sagittarius</option>
          <option value="Cap">Capricorn</option>
          <option value="Aqu">Aquarius</option>
          <option value="Pis">Pisces</option>
        </select>
        <br />
        Do you smoke cigarettes?:
        <input
        value={id.profile?.smoke ? "checked" : ""}
        onChange={handleChange}
        id="smoke"
        name="smoke"
        type="checkbox"
        />
        <br />
        Do you drink?:
        <input
        value={id.profile?.smoke ? "checked" : ""}
        onChange={handleChange}
        id="drink"
        name="drink"
        type="checkbox"
        />
        <br />
        Do you smoke cannabis?:
        <input
        value={id.profile?.four_twenty ? "checked" : ""}
        onChange={handleChange}
        id="four-twenty"
        name="fourTwenty"
        type="checkbox"
        />
        <br />
        Vibe Check! This will be seen on the the profiles page, write a quick quip to get your profile noticed!:
        <br />
        <textarea
        value={id.profile?.vibe_check}
        onChange={handleChange}
        id="vibe-check"
        name="vibeCheck"
        type="text"
        placeholder="max 100 characters"
        autoComplete="off"
        />
        <br />
        Bio:
        <br />
        <textarea
        value={id.profile?.bio}
        onChange={handleChange}
        id="bio"
        name="bio"
        type="text"
        placeholder="max 500 characters"
        autoComplete="off"
        />
        <br />
        <button type="submit" className="btn submit">Submit!</button>
      </form>
    </section>

  </> );
}
 
export default UpdateProfile;