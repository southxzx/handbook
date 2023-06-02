import { useRouter } from "next/router";

const BackButton: React.FC = () => {
  const router = useRouter();
  return (
    <button
      className="hover:text-neutral hover:cursor-pointer mb-3 text-grey font-light"
      onClick={() => router.back()}
    >
      ⏪ Back
    </button>
  );
};

export default BackButton;
