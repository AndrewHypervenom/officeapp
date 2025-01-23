import ShortcutCard from './ShortcutCard';

const ShortcutList = ({ shortcuts }) => {
  if (!shortcuts?.length) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No hay atajos disponibles en esta sección.
      </div>
    );
  }

  return (
    <div className="grid gap-4 animate-fade-in">
      {shortcuts.map((shortcut, index) => (
        <ShortcutCard
          key={`${shortcut.title}-${index}`}
          {...shortcut}
        />
      ))}
    </div>
  );
};

export default ShortcutList;