import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Check, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategorySliderProps {
  name: string;
  percentage: number;
  onChange: (value: number) => void;
  onNameChange: (newName: string) => void;
  onDelete: () => void;
  color: string;
  canDelete: boolean;
}

export const CategorySlider = ({ name, percentage, onChange, onNameChange, onDelete, color, canDelete }: CategorySliderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleSave = () => {
    if (editedName.trim()) {
      onNameChange(editedName.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedName(name);
    setIsEditing(false);
  };

  return (
    <div className="space-y-3 p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-border transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <span className={`w-3 h-3 rounded-full ${color} flex-shrink-0`}></span>
          {isEditing ? (
            <div className="flex items-center gap-2 flex-1">
              <Input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="h-8 text-sm bg-background flex-1"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSave();
                  if (e.key === 'Escape') handleCancel();
                }}
              />
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7"
                onClick={handleSave}
              >
                <Check className="h-4 w-4 text-primary" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7"
                onClick={handleCancel}
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          ) : (
            <>
              <Label htmlFor={name} className="text-sm font-medium text-foreground">
                {name}
              </Label>
              <div className="flex items-center gap-1">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7"
                  onClick={() => setIsEditing(true)}
                >
                  <Pencil className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </Button>
                {canDelete && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7"
                    onClick={onDelete}
                  >
                    <Trash2 className="h-3 w-3 text-destructive/70 hover:text-destructive" />
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Input
            id={name}
            type="number"
            value={percentage}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-16 h-8 text-sm text-center bg-background"
            min="0"
            max="100"
          />
          <span className="text-sm text-muted-foreground">%</span>
        </div>
      </div>
      <Slider
        value={[percentage]}
        onValueChange={(values) => onChange(values[0])}
        max={100}
        step={1}
        className="cursor-pointer"
      />
    </div>
  );
};
