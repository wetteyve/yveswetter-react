import './animate-3d.css';

type SkillItemProps = {
  skillTitle: string;
  skillLogo?: React.ReactNode;
};

const SkillItem = ({ skillTitle, skillLogo }: SkillItemProps) => {
  const BLa = skillLogo;

  return (
    <div className='flex flex-col items-center mr-10 pb-6'>
      <div>
        <h4 className='pb-2'>{skillTitle}</h4>
      </div>
      <div className='h-max rotate-vertical'>{skillLogo}</div>
    </div>
  );
};

export default SkillItem;
