interface Column {
  header: string;
  access: string | string[];
}

interface RowData {
  [key: string]: any;
}

interface TableProps {
  columns: Column[];
  data: RowData[];
}
