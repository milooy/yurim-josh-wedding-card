import styled from '@emotion/styled';

export const BorderedTable = styled.table`
  border-top: 1px solid black;
  /* border-bottom: 1px solid black; */
  width: 100%;

  tr:first-child td {
    border-bottom: 1px solid black;
  }

  td:first-child {
    font-weight: 700;
    width: 25%;
  }

  td {
    vertical-align: top;
    padding: 1rem 0;
  }
`;

export const TimelineTable = styled.table`
  width: 100%;
  border-left: 1px solid black;
  padding-left: 1rem;

  td:first-child {
    font-weight: 700;
    width: 25%;
  }

  td {
    vertical-align: top;
    padding: 0 0 2rem;
  }
  tr:last-of-type td {
    padding: 0;
  }
  ul {
    font-size: 0.8em;
    list-style: lower-roman;
    margin: 0 0.9rem;
  }
`;
