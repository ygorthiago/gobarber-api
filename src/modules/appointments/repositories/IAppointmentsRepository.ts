import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDRO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDRO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
