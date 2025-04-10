import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProfiles } from '../contexts/ProfileContext'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const ProfileDetail = () => {
  console.log(useParams())
  const { id } = useParams()
  const { profiles, deleteProfile } = useProfiles()
  const navigate = useNavigate()

  const profile = profiles.find((p) => p.id === id)

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#FF0000',
      cancelButtonText: 'No, cancel!',
      draggable: true
    })

    if (result.isConfirmed) {
      try {
        await deleteProfile(id)
        toast.success('Profile deleted successfully')
        navigate('/profiles')
      } catch (err) {
        toast.error('Error deleting profile')
        console.error('err -> ', err)
      }
    }
  }

  if (!profile) return <p>Perfil no encontrado </p>

  return (
    <div className='text-center mt-10'>
      <img
        src={profile.avatar}
        className='w-24 h-24 rounded-lg shadow-md mx-auto'
      />
      <h1 className='text-3xl font-bold'>{profile.name}</h1>
      <p className='text-gray-400'>{profile.id}</p>
      <p className='text-gray-400'>{profile.direction}</p>
      <p className='text-gray-400'>{profile.description}</p>
      <p className='text-gray-400'>{profile.phone}</p>
      <button
        onClick={() => navigate('/profiles')}
        className='mt-8 px-6 py-2 font-semibold text-white bg-gray-800 hover:bg-gray-700 rounded-lg'
      >
        Back
      </button>
      <button
        onClick={() => navigate(`/profiles/${profile.id}/edit/`)}
        className='mt-8 px-6 py-2 font-semibold text-white bg-blue-800 hover:bg-blue-700 rounded-lg ml-2'
      >
        Edit Profile
      </button>
      <button
        onClick={handleDelete}
        className='mt-8 px-6 py-2 font-semibold text-white bg-red-800 hover:bg-red-700 rounded-lg ml-2'
      >
        Delete Profile
      </button>
    </div >
  )
}

export default ProfileDetail