import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICreateAppointmentDRO from '../dtos/ICreateAppointmentDTO';
import IFindAllInDayProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';
import IFindAllInMonthProviderDTO from '../dtos/IFindAllInMonthProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDRO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayProviderDTO,
  ): Promise<Appointment[]>;
}
