import { useState, useEffect, forwardRef, type ComponentProps } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DayPicker, type SelectSingleEventHandler } from "react-day-picker"
import "react-day-picker/style.css"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export type DatePickerProps = Omit<ComponentProps<typeof DayPicker>, "mode" | "onSelect" | "selected"> & {
  triggerClassName?: string
  popoverContentClassName?: string
  placeholder?: string
  selected?: Date
  onSelect?: (date: Date | undefined) => void
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({
    triggerClassName,
    popoverContentClassName,
    placeholder = "Pick a date",
    selected,
    onSelect,
    ...props
  }, ref) => {
    const [date, setDate] = useState<Date | undefined>(
      selected instanceof Date ? selected : undefined
    )

    useEffect(() => {
      if (selected instanceof Date) {
        setDate(selected)
      }
    }, [selected])

    const handleSelect: SelectSingleEventHandler = (selectedDate) => {
      setDate(selectedDate)
      if (onSelect) {
        onSelect(selectedDate)
      }
    }

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
              triggerClassName
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn("w-auto p-0", popoverContentClassName)}
          ref={ref}
        >
          <DayPicker
            mode="single"
            selected={date}
            onSelect={handleSelect}
            {...props}
          />
        </PopoverContent>
      </Popover>
    )
  }
)

DatePicker.displayName = "DatePicker"
