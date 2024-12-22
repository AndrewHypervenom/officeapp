import ShortcutCard from './ShortcutCard';

const ShortcutList = ({ shortcuts, level }) => {
  return (
    <div className="grid gap-4 relative">
      {shortcuts.map((shortcut, index) => (
        <div
          key={index}
          className="transition-all duration-300 ease-in-out hover:transform hover:scale-[1.01]"
        >
          <ShortcutCard {...shortcut} level={level} />
        </div>
      ))}
    </div>
  );
};

export default ShortcutList;