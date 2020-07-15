import {
  faEdit,
  faEye,
  faPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from 'reactstrap'

const params = {
  title: "Data Table",
  header: [{
    name: 'no',
    field: 'no'
  }],
  body: []
}

const DataTable = ({ ...params }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <Row className="mb-3">
          <Col xs="6">{title}</Col>
          <Col xs="6" className="text-right">
            <Button color="success" size="sm">
              <FontAwesomeIcon icon={faPlus} /> Tambah
            </Button>
          </Col>
        </Row>
        <Table bordered striped hover size="sm" className="text-center">
          <thead>
            <tr>
              {
                header.map((head, index) =>
                  <td key={index}>{head.name}</td>
                )
              .}
            </tr>
          </thead>
          <tbody>
            {body.map((item, index) => {
              return (
                <tr key={index}>
                  {Object.entries(item).map((field, idx) =>
                    <td>{idx === 0 ? index+1 : field}</td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default DataTable
