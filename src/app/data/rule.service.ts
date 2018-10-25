import { RuleItem } from './rule-item.model';

export interface RuleService {
    rules(): Array<RuleItem>;
}
