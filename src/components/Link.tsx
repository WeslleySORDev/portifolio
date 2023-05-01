type Props = {
  name: string;
  image_path: string;
};

export function Link({ name, image_path }: Props) {
  return (
    <div className="flex items-center gap-5">
      <img src={image_path} alt={`Icone do ${name}`} />
      <span className="text-xs font-normal">{name}</span>
    </div>
  );
}
