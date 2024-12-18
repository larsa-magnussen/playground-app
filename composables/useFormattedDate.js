export function useFormattedDate(date) {
    return new Date(date).toLocaleDateString('no-NO');
}