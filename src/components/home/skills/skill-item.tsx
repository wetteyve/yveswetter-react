import './skills-animation.css';

type SkillItemProps = {
  skillTitle: string;
  skillLevel:
    | 'meter-10'
    | 'meter-20'
    | 'meter-30'
    | 'meter-40'
    | 'meter-50'
    | 'meter-60'
    | 'meter-70'
    | 'meter-80'
    | 'meter-90'
    | 'meter-100';
};

const SkillItem = ({ skillTitle, skillLevel }: SkillItemProps) => {
  return (
    <div>
      <div className='h-[50px] max-w-[120px] mr-10'>
        <h3 className='r-text-s'>{skillTitle}</h3>
      </div>
      <svg className='skill-svg'>
        <circle className='bg' cx='57' cy='57' r='52' />
        <circle className={skillLevel} cx='57' cy='57' r='52' />
      </svg>
    </div>
  );
};

export default SkillItem;
