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

const MemberHome = () => {
  return (
    <Card>
      <CardHeader>Member</CardHeader>
      <CardBody>
        <Row className="mb-3">
          <Col xs="6">Daftar Member</Col>
          <Col xs="6" className="text-right">
            <Button color="success" size="sm">
              <FontAwesomeIcon icon={faPlus} /> Tambah
            </Button>
          </Col>
        </Row>
        <Table bordered striped hover size="sm" className="text-center">
          <thead>
            <tr>
              <td>No</td>
              <td>Name</td>
              <td>Email</td>
              <td>Job Desk</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {[...Array(5).fill(0)].map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Foo Bar</td>
                  <td>foo@bar.com</td>
                  <td>Admin IT</td>
                  <td>
                    <ButtonGroup>
                      <Button color="success" size="sm">
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                      <Button color="primary" size="sm">
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button color="danger" size="sm">
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Pagination>
          {[...Array(8).fill(0)].map((item, index) => {
            if (index === 0) {
              return (
                <PaginationItem key={index}>
                  <PaginationLink first href="#" />
                </PaginationItem>
              )
            } else if (index === 7) {
              return (
                <PaginationItem key={index}>
                  <PaginationLink last href="#" />
                </PaginationItem>
              )
            } else {
              return (
                <PaginationItem key={index}>
                  <PaginationLink href="#">{index}</PaginationLink>
                </PaginationItem>
              )
            }
          })}
        </Pagination>
      </CardBody>
    </Card>
  )
}

export default MemberHome
