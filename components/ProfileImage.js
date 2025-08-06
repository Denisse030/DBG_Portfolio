import Image from 'next/image';
import profilePic from '../public/profile.png';

export default function ProfileImage() {
  return (
    <div className="section profile-section flex flex-col items-center justify-center text-center px-4 py-2">
      <p className="intro-text text-lg max-w-xl mb-6">
        Hello! My name is <b>Denisse Benito Gutierrez</b>, I'm a full-stack developer who loves building creative web apps!
      </p>
      <div className="w-[300px] h-[300px] relative overflow-hidden rounded-full border-4 border-[#da7cc3] shadow-md">
        <Image
          src={profilePic}
          alt="Denisse"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
