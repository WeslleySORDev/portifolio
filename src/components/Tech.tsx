type Props = {
  name: string;
};

export function Tech({ name }: Props) {
  return (
    <span className="flex-1 select-none truncate rounded-md bg-bg-techs p-2 text-center text-[10px] font-medium uppercase leading-3 text-text-techs hover:brightness-125">
      {name}
    </span>
  );
}
